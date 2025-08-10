import {render, screen} from "@testing-library/react";
import SocialLinkNav, {LINK_AND_ICON_LIST} from "../SocialLinkNav";

describe("SocialLinkNav", () => {
    it("should render each nav item", () => {
        render(<SocialLinkNav />);

        LINK_AND_ICON_LIST.forEach(({link, label}) => {
            const item = screen.getByRole("link", {name: label});
            expect(item).toBeVisible();
            expect(item.getAttribute("href")).toEqual(link);
        });
    });
});
