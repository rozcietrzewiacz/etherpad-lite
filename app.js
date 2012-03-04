/* Entry point for etherpad running on CloudFoundry
 * - this is the file run by CF and it has to be placed
 *   at the root of your app.
 */
var path = require('path')
process.chdir( path.join( process.cwd(), 'node'))

var s = require("./node/server")
