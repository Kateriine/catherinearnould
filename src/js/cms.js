import CMS from "netlify-cms";
import PostPreview from "./cms-preview-templates/work";
import ProductsPreview from "./cms-preview-templates/products";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("work", WorkPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
