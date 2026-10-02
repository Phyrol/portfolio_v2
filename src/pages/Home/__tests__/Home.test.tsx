import {render, screen} from "@testing-library/react";
import {Home} from "../Home";
import {useMediaQuery} from "common/utils";

jest.mock("common/components/NavBar", () => ({
    ...jest.requireActual("common/components/NavBar"),
    NavBar: jest.fn().mockReturnValue("MockNavbar"),
}));

jest.mock("common/components/SocialLinkNav", () => ({
    ...jest.requireActual("common/components/SocialLinkNav"),
    SocialLinkNav: jest.fn().mockReturnValue("MockSocialLinkNav"),
}));

jest.mock("common/utils", () => ({
    ...jest.requireActual("common/utils"),
    useMediaQuery: jest.fn(),
}));

const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;

describe("Home", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render navbar and social links when on a wide screen", () => {
        mockUseMediaQuery.mockReturnValue(true);
        render(<Home />);

        expect(screen.getByText("MockNavbar", {exact: false})).toBeVisible();
        expect(screen.getByText("MockSocialLinkNav", {exact: false})).toBeVisible();
    });

    it("should NOT render navbar or social links when on a small screen", () => {
        mockUseMediaQuery.mockReturnValue(false);
        render(<Home />);

        expect(screen.queryByText("MockNavbar", {exact: false})).not.toBeInTheDocument();
        expect(screen.queryByText("MockSocialLinkNav", {exact: false})).not.toBeInTheDocument();
    });

    it("should render footer", () => {
        render(<Home />);

        expect(screen.getByText("Built by Bradley Potzka")).toBeVisible();
    });
});
