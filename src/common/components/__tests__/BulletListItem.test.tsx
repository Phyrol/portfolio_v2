import {render, screen} from "@testing-library/react";
import BulletListItem from "../BulletListItem";

describe("BulletListItem", () => {
    it("should render the child element", () => {
        render(
            <BulletListItem>
                <p>Some child</p>
            </BulletListItem>
        );

        expect(screen.getByText("Some child")).toBeVisible();
    });
});
