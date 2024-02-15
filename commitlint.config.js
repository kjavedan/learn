module.exports = {
  // Extend the rules defined in @commitlint/config-conventional
  extends: ["@commitlint/config-conventional"],

  // Define custom rules for commit messages
  rules: {
    // Ensure that the commit message always starts with one of the specified types
    "type-enum": [
      2, // Set severity level to error
      "always", // Specify that the type must always be provided
      [
        // List of allowed commit types with descriptions
        "feat", // New feature or enhancement
        "fix", // Bug fix
        "docs", // Documentation changes
        "style", // Code formatting or style changes (non-functional)
        "refactor", // Code refactoring (no new features, no bug fixes)
        "perf", // Performance improvements
        "test", // Adding or modifying tests
        "ci", // Continuous integration changes
        "chore", // Maintenance or other miscellaneous tasks
        "revert", // Reverting a previous commit
        "workflow", // Workflow changes
        "mod", // Unclassified or miscellaneous changes
        "wip", // Work in progress
        "types", // Type definition changes
        "release", // Release-related changes
      ],
    ],

    // Disable the rule that requires a period at the end of the commit subject
    "subject-full-stop": [0, "never"],

    // Disable the rule that enforces a specific capitalization for the commit subject
    "subject-case": [0, "never"],
  },
};
