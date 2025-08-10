import {render, screen} from "@testing-library/react";
import SkillsList, {SkillsListProps} from "../SkillsList";

const mockSkill1 = "mock-skill-1";
const mockSkill2 = "mock-skill-2";
const mockSkills = [mockSkill1, mockSkill2];

const getMockProps = (overrides?: Partial<SkillsListProps>): SkillsListProps => ({
    skills: mockSkills,
    ...overrides,
});

describe("SkillsList", () => {
    it("should render each skill passed", () => {
        render(<SkillsList {...getMockProps()} />);

        mockSkills.forEach(skill => {
            expect(screen.getByText(skill)).toBeVisible();
        });
    });

    it("should not render if the skills list is empty", () => {
        render(<SkillsList {...getMockProps({skills: []})} />);

        expect(screen.queryByTestId("skills-list")).not.toBeInTheDocument();
    });
});
