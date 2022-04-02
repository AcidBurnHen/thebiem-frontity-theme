import server from "@frontity/core/src/server";
import thebiem_theme_default from "thebiem-theme/src/index";
import frontity__wp_source_default from "@frontity/wp-source/src/index";
import frontity__tiny_router_default from "@frontity/tiny-router/src/index";
import frontity__html2react_default from "@frontity/html2react/src/index";

const packages = {
  thebiem_theme_default,
  frontity__wp_source_default,
  frontity__tiny_router_default,
  frontity__html2react_default,
};

export default server({ packages });

