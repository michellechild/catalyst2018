module.exports = function(arg1, arg2, options) {
    if (arg1 == arg2){
        return options.fn(this);
    }
}
/* Usage */
/*
 * {{#ifEquals val1 val2}}
 *      Content that will only display when val1 == val2
 * {{/ifEquals}}
 */
