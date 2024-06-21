import type { CollectionEntry } from "astro:content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function slugify(input?: string) {
	if (!input) return "";

	// make lower case and trim
	let slug = input.toLowerCase().trim();

	// remove accents from charaters
	slug = slug.normalize("NFD").replace(/\p{M}/gu, "");

	// replace invalid chars with spaces
	slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

	// replace multiple spaces or hyphens with a single hyphen
	slug = slug.replace(/[\s-]+/g, "-");

	return slug;
}

export function formatDate(date: string, includeRelative = false) {
	const currentDate = new Date();
	const targetDate = new Date(!date.includes("T") ? `${date}T00:00:00` : date);

	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
	const daysAgo = currentDate.getDate() - targetDate.getDate();

	let formattedDate = "";

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`;
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`;
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`;
	} else {
		formattedDate = "Today";
	}

	const fullDate = targetDate.toLocaleString("en-us", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	if (!includeRelative) {
		return fullDate;
	}

	return `${fullDate} (${formattedDate})`;
}

export function reformatDate(date: Date) {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
		timeZone: "UTC", // Specify UTC as the timezone
	};

	return date.toLocaleDateString("en-US", options);
}

export function calculateReadingTime(mdxContent: string) {
	// Define the average reading speed (words per minute)
	const wordsPerMinute = 200;

	// Strip MDX/HTML tags and count the words
	const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, ""); // Basic stripping of HTML tags
	const wordCount = text
		.split(/\s+/)
		.filter((word: string) => word.length > 0).length;

	// Calculate reading time
	const readingTime = Math.ceil(wordCount / wordsPerMinute);

	return readingTime;
}

export function sortItemsByDateDesc(
	itemA: CollectionEntry<"blog">,
	itemB: CollectionEntry<"blog">,
) {
	return (
		new Date(itemB.data.publishedAt).getTime() -
		new Date(itemA.data.publishedAt).getTime()
	);
}
