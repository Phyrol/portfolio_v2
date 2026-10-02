import {render, screen} from "@testing-library/react";
import {WorkInfoHeader} from "../WorkInfoHeader";
import {WORK_HISTORY} from "pages/Home/constants";

describe("WorkInfoHeader", () => {
    it.each(WORK_HISTORY)("should render the header info for $company", workItem => {
        render(<WorkInfoHeader {...workItem} shouldUseLink />);

        expect(screen.getByTestId("company")).toBeVisible();
        expect(screen.getByText(workItem.currentRole)).toBeVisible();
        expect(screen.getByText(workItem.dateRange)).toBeVisible();

        expect(screen.getByRole("link")).toHaveAttribute("href", workItem.link);
    });

    it("should NOT render a link if shouldUseLink is false", () => {
        const [workItem] = WORK_HISTORY;

        render(<WorkInfoHeader {...workItem} />);

        expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
});
