import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { CONFIG } from "@/config";
import * as React from "react";

const socialBorder =
	"border group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex";

const SocialTooltip = () => (
	<TooltipProvider delayDuration={70}>
		{CONFIG.socials.map((social) => {
			return (
				<Tooltip key={social.platform}>
					<TooltipTrigger className={`${socialBorder}`}>
						<a
							href={social.link}
							target="_blank"
							className="cursor-pointer"
							rel="noreferrer"
						>
							{social.icon}
						</a>
					</TooltipTrigger>
					<TooltipContent side="bottom" className="mr-4 px-3 py-1.5 text-xs">
						{social.platform}
					</TooltipContent>
				</Tooltip>
			);
		})}
	</TooltipProvider>
);

export { SocialTooltip };
