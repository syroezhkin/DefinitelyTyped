include("simple.js");                     // $ExpectType void
include("scripts/simple.js");             // $ExpectType void
include("scripts/library.js");            // $ExpectType void
include("scripts/input.js");              // $ExpectType void
include("scripts/simple_create.js");      // $ExpectType void
include("scripts/simple_info.js");        // $ExpectType void
include("scripts/simple_input.js");       // $ExpectType void
include("scripts/simple_modify.js");      // $ExpectType void
include("scripts/simple_transaction.js"); // $ExpectType void
include("scripts/simple_view.js");        // $ExpectType void

getMainWindow();           // $ExpectType object
getDocumentInterface();    // $ExpectType object | undefined
getDocument();             // $ExpectType object | undefined
getGraphicsView();         // $ExpectType object | undefined
createDocument();          // $ExpectType object
createDocumentInterface(); // $ExpectType object
disableInput();            // $ExpectType boolean | undefined
enableInput();             // $ExpectType boolean | undefined
isInputEnabled();          // $ExpectType boolean | undefined
warning("Message");        // $ExpectType undefined
warning(404);              // $ExpectType undefined
update();                  // $ExpectType boolean
sleep(1000);               // $ExpectType boolean
