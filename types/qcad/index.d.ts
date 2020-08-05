// Type definitions for non-npm package qcad 3.25
// Project: https://github.com/qcad/qcad
// Definitions by: Vladimir Syroezhkin <https://github.com/syroezhkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9

type pathToScript =
  | "simple.js"
  | "scripts/simple.js"
  | "scripts/library.js"
  | "scripts/input.js"
  | "scripts/simple_create.js"
  | "scripts/simple_info.js"
  | "scripts/simple_input.js"
  | "scripts/simple_modify.js"
  | "scripts/simple_transaction.js"
  | "scripts/simple_view.js";

declare function include(path: pathToScript): void;

/**
 * Returns a pointer to the main application window (RMainWindowQt).
 */
declare function getMainWindow(): object;

/**
 * Returns the current RDocumentInterface or undefined.
 */
declare function getDocumentInterface(): object | undefined;

/**
 * Returns the current RDocument or undefined.
 */
declare function getDocument(): object | undefined;

/**
 * Returns the current or last active RGraphicsView.
 */
declare function getGraphicsView(): object | undefined;

/**
 * Creates an (off-screen) document. Such a document can be filled with
 * objects and saved to disk, pasted into the current document, etc.
 *
 * @return new empty RDocument with default settings
 */
declare function createDocument(): object;

/**
 * Creates an (off-screen) document with a document interface that can be used
 * to import / export to / from files or graphics scenes and views.
 *
 * @return new empty RDocumentInterface with default settings
 */
declare function createDocumentInterface(): object;

/**
 * Disables the main application window to prevent user input.
 */
declare function disableInput(): boolean | undefined;

/**
 * Enables the main application window to prevent user input.
 */
declare function enableInput(): boolean | undefined;

/**
 * Returns true if user input is enabled.
 */
declare function isInputEnabled(): boolean | undefined;

/**
 * Prints a warning to stdout.
 */
declare function warning(msg: unknown): undefined;

/**
 * Keeps the user interface up to date during long operations.
 * User input must be disabled using disableInput before calling update.
 */
declare function update(): boolean;

/**
 * Sleeps for the indicated time in milliseconds.
 */
declare function sleep(d: number): boolean;
