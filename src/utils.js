import VNode from 'snabbdom/vnode';
import {AllHtmlEntities as entities} from 'html-entities';

export function createTextVNode(text) {
    return VNode(undefined, undefined, undefined, unescapeEntities(text));
}

export function transformName(name) {
    // Replace -a with A to help camel case style property names.
    name = name.replace( /-(\w)/g, function _replace( $1, $2 ) {
        return $2.toUpperCase();
    });
    // Handle properties that start with a -.
    const firstChar = name.charAt(0).toLowerCase();
    return `${firstChar}${name.substring(1)}`;
}

export function unescapeEntities(text) {
    return entities.decode(text);
}
