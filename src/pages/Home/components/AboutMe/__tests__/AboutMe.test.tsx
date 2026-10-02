import {render, screen} from "@testing-library/react";
import {AboutMe} from "../AboutMe";
import {EMAIL, GITHUB_PROFILE_LINK, ITCHIO_PROFILE_LINK, LINKED_IN_PROFILE_LINK, PHONE_NUMBER} from "common/constants";

describe("AboutMe", () => {
    it("should render email and phone number", () => {
        render(<AboutMe />);

        const emailElement = screen.getByText(EMAIL);
        expect(emailElement).toBeVisible();
        expect(emailElement).toHaveAttribute("href", `mailto:${EMAIL}`);

        expect(screen.getByText(PHONE_NUMBER)).toBeVisible();
    });

    it("should render each social link", () => {
        render(<AboutMe />);

        const githubElement = screen.getByText("GitHub");
        expect(githubElement).toBeVisible();
        expect(githubElement).toHaveAttribute("href", GITHUB_PROFILE_LINK);

        const linkedInElement = screen.getByText("LinkedIn");
        expect(linkedInElement).toBeVisible();
        expect(linkedInElement).toHaveAttribute("href", LINKED_IN_PROFILE_LINK);

        const itchioElement = screen.getByText("itch.io");
        expect(itchioElement).toBeVisible();
        expect(itchioElement).toHaveAttribute("href", ITCHIO_PROFILE_LINK);
    });
});
