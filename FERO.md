

# Test Strategy


## Checkout Functional Testing 


### Design Phase

I would require to be involved from the design phase of a feature/release.
By attending the daily meetings, refinements and design meetings, I would ensure that I have all the input to create the test approach for a specific release/feature.

I would start by identifying the test scenarios that are unit test candidate, and communicating this during the refinement process to ensure the development team agrees. Following that, I would define the UI and API cases. Finally I would determine which parts of the implementation cannot be automated or not efficient to automate.

### How I prevent defects during design & analysis (shift-left)

I try to make the system testable before it exists. I try to make sure the requirements are clear during the design and refinement meetings, for me and for the developers. In design meetings, I look for risks and vulnarabilities.

Next up, during the implementation phase, I would assure the deliverables meet the requirements, as they are handed over to testing. Depending on the process of the company, I would make sure I receive every ticket/implementation to test before it is published or merged. 

My role is not to be a blocker, but ensure we deliver a quality product. I would say no to a release in case of there is uncontrolled risk. In FERO's case, we deal with sensitive personal customer data, communication with PSP's, I would block the case if there is any concerns related to data, security issues, incorrect payment/tax calculations, no backwards-compatibility or rollback plan.

In addition, I would block the release if there are critical test cases failing, major bugs open.

### Automation Approach

Depending on the context of the release, and assuming the tests are running on a stable environment, I would suggest the unit tests are written first. The unit tests can be defined by the QA collaborating with the developers, and delivered with the implementation. 

Secondly, I would implement API test cases, since majority of the security and access related scenarios can be covered there and it is most of the times less timely to create. 

Next, the E2E tests, as our safety net, to keep the CI fast and stable. 

And lastly, the UI scenarios. Since these are the most expensive and prone to be fragile I would try to keep these minimal. This would include rendering the critical states, cross-browser sanity checks, responsiveness etc.

### Test data and cleanup

I keep the scenario based data isolated by using unique data for each scenario, so executions remain independent. Data is created in setup and hooks, and cleaned up in teardown.

The data that is not manipulated during the test run, can be reused between test scenarios, this is mainly static data that can be shared in multiple scenarios.

If there are any test data that is only possible to soft delete, I would have a scheduled purge job. If possible, keep the test environment/data separate from the dev environment. If possible, I would do a DB snapshot reset periodically. 

### Suggested Tools and Frameworks

It depends on the project stack, but my current preference is Playwright with TypeScript. Playwright’s ecosystem and examples are TypeScript first, and its test runner executes in the Node.js runtime, which makes it a natural fit for modern web applications. Strong typing improves test reliability and refactoring safety.

I typically structure tests using the Page Object Model to keep the selectors and interaction logic separate from the test goal, which improves the readability and keeps the maintenance at minimal with the UI changes.

### Quality Process & AI

I use github copilot, mainly for it's excellent autocompletion skills especially with test writing and defining locators. Last couple of months I have been experimenting with Playwrights new test planner, generator and healer agents. It is not perfect, but still very impressive. 

When I use the agents, I assume the output is untrusted code. To validate it, I would build and run to make sure all the imports exsist etc. Make sure the test fails when the feature is broken, check assertions are meaningful, confirm the test is testing the behavior. One of the downsides of the healer agent for example, it is determined to fix the test, no matter the feature is working or not!

I review code mainly for risk and testability rather than style. I look for edge cases and error handling, data integrity, clear logging, how easy to test or mock, are necessary element identifiers implemented for UI testing, and migration safety.