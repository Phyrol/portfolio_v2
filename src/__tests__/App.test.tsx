import {render, screen} from "@testing-library/react";
import App from "../App";
import {HomePageSection} from "pages/Home";

describe("App", () => {
    it("should render the app on the home page", () => {
        render(<App />);

        expect(screen.getByTestId(HomePageSection.ABOUT)).toBeVisible();
    });
});
