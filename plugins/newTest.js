joint.shapes.test = {};

joint.shapes.test.Entity = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><rect class="outer"/><rect class="inner"/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'test.Entity',
        size: { width: 150, height: 60 },
        attrs: {
            rect: {
                fill: 'white', stroke: 'black', 'stroke-width': 2
            },
            '.outer': {
                width: 150, height: 60
            },
            '.inner': {
                width: 140, height: 50,
                ref: '.outer', 'ref-x': .03, 'ref-y': .08,
                display: 'none'
            },
            text: {
                text: 'Entity',
                'font-family': 'Courier New', 'font-size': '.8em',
                ref: '.outer', 'ref-x': .5, 'ref-y': .5,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.test.WeakEntity = joint.shapes.test.Entity.extend({

    defaults: joint.util.deepSupplement({

        type: 'test.WeakEntity',

        attrs: {
            '.inner' : { display: 'auto' },
            text: { text: 'Weak Entity' }
        }

    }, joint.shapes.test.Entity.prototype.defaults)
});

joint.shapes.test.Relationship = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>',
    
    defaults: joint.util.deepSupplement({

        type: 'test.Relationship',
        size: { width: 80, height: 80 },
        attrs: {

            polygon: { fill: 'white', stroke: 'black', 'stroke-width': 2},
            '.outer': {
                points: '40,0 80,40 40,80 0,40'
            },
            '.inner': {
                points: '40,5 75,40 40,75 5,40',
                display: 'none'
            },
            text: {
                text: 'Relationship',
                'font-family': 'Courier New', 'font-size': '.6em',
                ref: '.', 'ref-x': .5, 'ref-y': .5,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.test.IdentifyingRelationship = joint.shapes.test.Relationship.extend({

    defaults: joint.util.deepSupplement({

        type: 'test.IdentifyingRelationship',

        attrs: {
            '.inner': { display: 'auto' },
            text: { text: 'Identifying' }
        }

    }, joint.shapes.test.Relationship.prototype.defaults)
});

joint.shapes.test.Attribute = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'test.Attribute',
        size: { width: 100, height: 50 },
        attrs: {
            'ellipse': {
                stroke: 'black', 'stroke-width': 2,
                transform: 'translate(50, 25)',
                opacity: .6
            },
            '.outer': {
                cx: 50, cy: 25, rx: 50, ry: 25,
                fill: 'white'
            },
            '.inner': {
                cx: 50, cy: 25, rx: 45, ry: 20,
                fill: 'transparent', display: 'none'
            },
            text: {
                 'font-family': 'Courier New', 'font-size': '.8em',
                 ref: '.', 'ref-x': .5, 'ref-y': .5,
                 'x-alignment': 'middle', 'y-alignment': 'middle'
             }
         }

     }, joint.dia.Element.prototype.defaults)

 });

 joint.shapes.test.Multivalued = joint.shapes.test.Attribute.extend({

     defaults: joint.util.deepSupplement({

         type: 'test.Multivalued',

         attrs: {
             '.inner': { display: 'block' },
             text: { text: 'multivalued' }
         }
     }, joint.shapes.test.Attribute.prototype.defaults)
 });

/*
 joint.shapes.test.Derived = joint.shapes.test.Attribute.extend({

     defaults: joint.util.deepSupplement({

         type: 'test.Derived',

         attrs: {
             '.outer': { 'stroke-dasharray': '3, 5' },
             text: { text: 'derived' }
         }

     }, joint.shapes.test.Attribute.prototype.defaults)
 });
*/

 joint.shapes.test.Key = joint.shapes.test.Attribute.extend({

     defaults: joint.util.deepSupplement({

         type: 'test.Key',

         attrs: {
             ellipse: { 'stroke-width': 4 },
             text: { text: 'key', 'font-weight': 'bold', 'text-decoration': 'underline' }
         }
     }, joint.shapes.test.Attribute.prototype.defaults)
});

joint.shapes.test.Normal = joint.shapes.test.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'test.Normal',

        attrs: { text: { text: 'Normal' }}

    }, joint.shapes.test.Attribute.prototype.defaults)
});

joint.shapes.test.ISA = joint.dia.Element.extend({

    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>',

    defaults: joint.util.deepSupplement({

        type: 'test.ISA',
        size: { width: 100, height: 50 },
        attrs: {
            polygon: {
                points: '0,0 50,50 100,0',
                fill: 'gold', stroke: 'goldenrod', 'stroke-width': 2
            },
            text: {
                text: 'ISA',
                ref: '.', 'ref-x': .5, 'ref-y': .3,
                'x-alignment': 'middle', 'y-alignment': 'middle'
            }
        }

    }, joint.dia.Element.prototype.defaults)

});

joint.shapes.test.Line = joint.dia.Link.extend({

    defaults: { type: "test.Line" },

    cardinality: function(value) {
        this.set('labels', [{ position: -20, attrs: { text: { dy: -8, text: value }}}]);
    }
});
