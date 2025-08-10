import {render, screen} from "@testing-library/react";
import NavBar, {NavBarProps} from "../NavBar";
import {RESUME_TEXT} from "common/constants";
import userEvent from "@testing-library/user-event";

const mockObserve = jest.fn();
class MockIntersectionObserver {
    observe = mockObserve;
    unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
});

const mockId1 = "mock-id-1";
const mockId2 = "mock-id-2";
const mockIds = [mockId1, mockId2];

const getMockProps = (overrides?: Partial<NavBarProps>): NavBarProps => ({
    ids: mockIds,
    ...overrides,
});

const mockScrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

const getElementByIdSpy = jest.spyOn(document, "getElementById");

describe("NavBar", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render a button for each ID passed", () => {
        render(<NavBar {...getMockProps()} />);

        mockIds.forEach(id => {
            expect(screen.getByRole("button", {name: id})).toBeVisible();
        });
    });

    it(`should render the ${RESUME_TEXT} button`, () => {
        render(<NavBar {...getMockProps()} />);

        expect(screen.getByRole("button", {name: RESUME_TEXT})).toBeVisible();
    });

    it("should find and scroll to the clicked element ID", () => {
        getElementByIdSpy.mockReturnValue(document.createElement("div"));

        render(<NavBar {...getMockProps()} />);

        userEvent.click(screen.getByRole("button", {name: mockId1}));

        expect(getElementByIdSpy).toHaveBeenCalledWith(mockId1);
        expect(mockScrollIntoView).toHaveBeenCalledTimes(1);
    });

    it("should call the observer for the number of IDs that are passed", () => {
        const mockElement = document.createElement("div");
        getElementByIdSpy.mockReturnValue(mockElement);

        render(<NavBar {...getMockProps()} />);

        expect(mockObserve).toHaveBeenCalledWith(mockElement);
        expect(mockObserve).toHaveBeenCalledTimes(mockIds.length);
    });
});
