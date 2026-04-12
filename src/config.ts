import type { ApiConfig } from "./shared";

export const API_CONFIG: ApiConfig = {
  name: "regex-generator",
  slug: "regex-generator",
  description: "Validate, test, and explain regular expressions. Test against sample strings with match highlighting.",
  version: "1.0.0",
  routes: [
    {
      method: "POST",
      path: "/api/test",
      price: "$0.001",
      description: "Test a regex pattern against input strings",
      toolName: "text_test_regex",
      toolDescription: "Use this when you need to test a regular expression against one or more strings. Returns all matches, capture groups, match positions, and a human-readable explanation of the pattern. Supports flags (g, i, m, s, u). Do NOT use for text classification — use text_classify_content instead. Do NOT use for PII detection — use privacy_detect_pii instead.",
      inputSchema: {
        type: "object",
        properties: {
          pattern: { type: "string", description: "Regular expression pattern (without delimiters)" },
          flags: { type: "string", description: "Regex flags: g, i, m, s, u (default: g)" },
          testStrings: { type: "array", items: { type: "string" }, description: "Array of strings to test against the pattern" },
        },
        required: ["pattern", "testStrings"],
      },
    },
  ],
};
