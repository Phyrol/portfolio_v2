import {render, screen} from "@testing-library/react";
import {HomePageSection, WORK_HISTORY} from "pages/Home/constants";
import {Experience} from "../Experience";
import {useMediaQuery} from "common/utils";

const WIDE_SCREEN_CLASS =
    "hover:bg-space-cadet/60 hover:cursor-pointer group/experience-info hover:inset-shadow-lightest-space-cadet hover:inset-shadow-sm";

jest.mock("common/utils", () => ({
    ...jest.requireActual("common/utils"),
    useMediaQuery: jest.fn(),
}));

const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;

describe("Experience", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the header", () => {
        render(<Experience />);

        expect(screen.getByRole("heading", {name: HomePageSection.EXPERIENCE})).toBeVisible();
    });

    it("should render each experience entry", () => {
        render(<Experience />);

        expect(screen.getAllByTestId("experience-item")).toHaveLength(WORK_HISTORY.length);
    });

    it("should render the entries as a link if on wide screen", () => {
        mockUseMediaQuery.mockReturnValue(true);
        render(<Experience />);

        const [item] = screen.getAllByTestId("experience-item");
        expect(item).toBeInstanceOf(HTMLAnchorElement);
        expect(item).toHaveClass(WIDE_SCREEN_CLASS);
    });

    it("should render the entries as a div if on a small screen", () => {
        mockUseMediaQuery.mockReturnValue(false);
        render(<Experience />);

        const [firstItem] = screen.getAllByTestId("experience-item");
        expect(firstItem).toBeInstanceOf(HTMLDivElement);
        expect(firstItem).not.toHaveClass(WIDE_SCREEN_CLASS);
    });
});
