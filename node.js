module.exports = function(RED) {
    function WentzNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            // add foo!
            var output = "FOOOOOOOOOOOOOOOO!!!!!"
            msg.payload = output;
            node.send(msg);
        });
    }
    RED.nodes.registerType("wentz-node",WentzNode);
}