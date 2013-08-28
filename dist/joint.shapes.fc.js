/*! JointJS v0.6.0 - JavaScript diagramming library  2013-08-27 


This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

joint.shapes.fc = {};

joint.shapes.fc.StartEnd = joint.shapes.erd.Attribute.extend({

    defaults: joint.util.deepSupplement({

        type: 'erd.Normal',

        attrs: { text: { text: 'Normal' }}

    }, joint.shapes.ses.Attribute.prototype.defaults)
});
