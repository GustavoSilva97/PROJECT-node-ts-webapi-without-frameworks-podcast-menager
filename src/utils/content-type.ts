export enum ContentType {
  // Formatos mais comuns
  JSON = "application/json",
  Text = "text/plain",
  HTML = "text/html",
  XML = "application/xml",
  FormURLEncoded = "application/x-www-form-urlencoded",
  MultipartFormData = "multipart/form-data",

  // Arquivos e mídia
  PDF = "application/pdf",
  CSV = "text/csv",
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WebP = "image/webp",
  MP4 = "video/mp4",
  WebM = "video/webm",
  OGG = "audio/ogg",
  MP3 = "audio/mpeg",
  ZIP = "application/zip",
  OctetStream = "application/octet-stream",

  // Content negotiation
  Any = "*/*"
}
