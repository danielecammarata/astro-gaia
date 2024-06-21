import { type CollectionEntry, getCollection } from "astro:content";
import { slugify } from "./utils";

export const getPosts = async (max?: number) => {
	return (await getCollection("blog"))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
		.slice(0, max);
};

export const getAllCategories = async () => {
	const posts = await getCollection("blog");
	const categories = new Set(posts.map((post) => post.data.category));
	return Array.from(categories);
};

export function getAllTags(posts: CollectionEntry<"blog">[]) {
	const tags: string[] = [
		...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean)),
	];
	return tags
		.map((tag) => {
			return {
				name: tag,
				slug: slugify(tag),
			};
		})
		.filter((obj, pos, arr) => {
			return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
		});
}

export function getPostsByCategory(
	posts: CollectionEntry<"blog">[],
	category: string,
) {
	const filteredPosts: CollectionEntry<"blog">[] = posts.filter(
		(post) => (post.data.category || "").toLowerCase() === slugify(category),
	);
	return filteredPosts;
}

export function getPostsByTag(
	posts: CollectionEntry<"blog">[],
	tagSlug: string,
) {
	const filteredPosts: CollectionEntry<"blog">[] = posts.filter((post) =>
		(post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug),
	);
	return filteredPosts;
}
