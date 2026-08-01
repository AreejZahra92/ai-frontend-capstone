# AI-Assisted Workflow Comparison

## Round One: Vague Prompt

For the first implementation, I used a simple prompt:

"Create a settings form component for my frontend project."

The purpose of this round was to observe what an AI agent would generate with minimal instructions. The AI created a basic settings form, but the implementation lacked several important engineering considerations. The component was more self-contained and did not include reusable UI components, testing support, or detailed validation behavior.

The review effort was higher because important requirements had to be manually checked and improved.

## Round Two: Engineered Prompt

For the second implementation, I used a detailed engineering prompt. I asked the AI agent to first explore the project structure, create a plan, implement the feature, review the code, and add tests.

The AI produced a more structured solution. It created reusable components such as Input, Toggle, and Button instead of keeping everything inside one component. It also added testing support and client-side validation.

## Comparison

### Correctness

The engineered workflow produced a feature that matched the requirements more closely. The settings form included the required fields such as full name, email, password, and notification preferences.

### Accessibility

The second implementation followed better frontend practices by creating structured components and improving form organization. This made future accessibility improvements easier compared to the single-component approach.

### Edge Cases

The vague prompt did not clearly handle cases such as invalid inputs or empty fields. The engineered workflow added validation logic and tests to verify important user interactions.

### Review Effort

The first version required more manual review because the AI had little context. The second version required less correction because the prompt included requirements, constraints, and a verification step.

## AI Mistake Found

One mistake found in the first AI-generated version was that it created a simple form without enough validation and reusable structure. The missing validation and testing requirements needed additional improvements.

## Conclusion

This experiment showed that AI-assisted development works best when the developer provides clear requirements, constraints, and verification steps. A detailed workflow produces more reliable code and reduces review time.