import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    platform: "neutral",
    target: "es2022",
    dts: true,
    sourcemap: true,
    publint: true,
  },
  test: {
    include: ["test/**/*.spec.ts"],
  },
  // Mirrors the previous .prettierrc (Prettier defaults + trailing commas).
  fmt: {
    ignorePatterns: ["dist/**", "CHANGELOG.md"],
    printWidth: 80,
    trailingComma: "all",
    sortPackageJson: false,
  },
  lint: {
    ignorePatterns: ["dist/**"],
    options: { typeAware: true, typeCheck: true },
  },
});
