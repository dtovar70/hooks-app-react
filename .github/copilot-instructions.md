# Copilot Instructions for hooks-app-react

## Project Overview
This is a React + TypeScript project using Vite for fast development and HMR. The codebase is organized by hook usage examples, with each major React hook demonstrated in its own directory under `src/`.

## Key Architecture & Patterns
- **Feature Folders:** Each hook example is in its own folder (e.g., `src/01-useState/`, `src/02-useEffect/`, etc.). Components and related logic are grouped by feature, not by type.
- **Component Structure:** UI components are in `src/components/ui/`. Shared logic (custom hooks) is in `src/hooks/`. Utility functions are in `src/lib/utils.ts`.
- **State Management:** Most examples use local state (`useState`, `useReducer`). See `src/05-useReducer/` for reducer patterns.
- **Memoization:** See `src/06-memos/` for examples of `React.memo`, `useMemo`, and `useCallback`.
- **Optimistic UI:** The `src/07-useOptimistic/InstagromApp.tsx` demonstrates optimistic updates.

## Developer Workflows
- **Start Dev Server:**
  ```bash
  npm run dev
  ```
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Linting:**
  ESLint is configured via `eslint.config.js`. Type-aware linting uses both `tsconfig.node.json` and `tsconfig.app.json`.
- **Type Checking:**
  TypeScript config is split for app and node usage. Use `tsc --noEmit` for type checking.

## Project-Specific Conventions
- **No global state management library (e.g., Redux) is used.**
- **Prefer feature-based folder structure over type-based.**
- **Custom hooks are placed in `src/hooks/`.**
- **UI primitives (button, card, etc.) are in `src/components/ui/`.**
- **Reducers for complex state are in `src/05-useReducer/reducer/`.**

## Integration Points
- **Vite Plugins:** Uses `@vitejs/plugin-react` or `@vitejs/plugin-react-swc` for Fast Refresh.
- **ESLint Plugins:** Optionally uses `eslint-plugin-react-x` and `eslint-plugin-react-dom` for React-specific linting.

## Example Patterns
- **Reducer Pattern:** See `src/05-useReducer/reducer/tasksReducer.ts` for task management logic.
- **Custom Hook:** See `src/hooks/useCounter.tsx` for a reusable counter hook.
- **Optimistic UI:** See `src/07-useOptimistic/InstagromApp.tsx` for optimistic state updates.

## References
- [README.md](../README.md) for setup and linting details
- [eslint.config.js](../eslint.config.js) for lint rules
- [tsconfig.app.json](../tsconfig.app.json), [tsconfig.node.json](../tsconfig.node.json) for TypeScript config

---
**Feedback:** Please review and suggest improvements or clarify any missing conventions or workflows.
