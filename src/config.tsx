import { DiscordIcon } from "@/components/icons/discord";
import { GithubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { TwitchIcon } from "@/components/icons/twitch";
import { XIcon } from "@/components/icons/x";
import { YouTubeIcon } from "@/components/icons/youtube";
import type React from "react";

export type Image = {
	src: string;
	alt?: string;
	caption?: string;
};

export type Social = {
	platform: string;
	link: string;
	icon: React.ReactNode;
};

export type Category = {
	title: string;
	page: string | undefined;
	href: string;
};

export type Meta = {
	title: string;
	description: string;
	image: Image;
};

export type SiteConfig = {
	meta: Meta;
	name: string;
	headshot: string;
	title: string;
	description: string;
	socials: Array<Social>;
	categories: Array<Category>;
};

export const CONFIG: SiteConfig = {
	meta: {
		title: "Gaia Rossi",
		description: "This is my portfolio.",
		image: {
			src: "/headshot.jpg",
			alt: "Gaia Rossi",
		},
	},
	name: "Gaia Rossi",
	headshot: "/headshot.jpg",
	title: "Software Developer",
	description: `I'm Gaia Rossi, an Italian front-end developer with over a decade of experience in crafting beautiful, user-friendly websites. 
  I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. 
  Beyond coding, I have a passion for traveling and discovering new cultures, which often inspires my work. 
  I also love to cook and experiment with new dishes from around the world. 
  This blend of technical skills and diverse experiences allows me to bring a unique and creative perspective to every project I undertake.`,
	socials: [
		{
			platform: "GitHub",
			link: "https://github.com/",
			icon: <GithubIcon />,
		},
		{
			platform: "LinkedIn",
			link: "https://www.linkedin.com/",
			icon: <LinkedInIcon />,
		},
		{
			platform: "Discord",
			link: "https://discord.com/",
			icon: <DiscordIcon />,
		},
		{
			platform: "X",
			link: "https://x.com/",
			icon: <XIcon />,
		},
		{
			platform: "YouTube",
			link: "https://www.youtube.com/",
			icon: <YouTubeIcon />,
		},
		{
			platform: "Twitch",
			link: "https://www.twitch.tv/",
			icon: <TwitchIcon />,
		},
	],
	categories: [
		{
			title: "All",
			page: undefined,
			href: "/posts",
		},
		{
			title: "Technical",
			page: "tech",
			href: "/posts/tech",
		},
		{
			title: "Food",
			page: "food",
			href: "/posts/food",
		},
		{
			title: "Travel",
			page: "travel",
			href: "/posts/travel",
		},
	],
};
