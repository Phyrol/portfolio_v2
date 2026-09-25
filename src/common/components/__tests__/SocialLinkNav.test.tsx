import {render, screen} from "@testing-library/react";
import {SocialLinkNav, SOCIAL_LINK_AND_ICON_LIST} from "../SocialLinkNav";

describe("SocialLinkNav", () => {
    it("should render each nav item", () => {
        render(<SocialLinkNav />);

        SOCIAL_LINK_AND_ICON_LIST.forEach(({link, ariaLabel}) => {
            const item = screen.getByRole("link", {name: ariaLabel});
            expect(item).toBeVisible();
            expect(item.getAttribute("href")).toEqual(link);
        });
    });
});
