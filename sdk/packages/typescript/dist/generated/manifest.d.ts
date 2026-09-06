/** Per-operation versioning-policy state embedded at generation time. */
export declare const embeddedManifest: Record<string, {
    kind: string;
    deprecated?: boolean;
    sunsetAt?: string;
    behaviorChanged?: boolean;
    note?: string;
}>;
/** SHA-256 of the platform-manifest.json this SDK was generated from. */
export declare const manifestHash = "88b7c615aa77e420862d5992c859fe1ee350ca3a256f26410e7787ffeb964462";
/** Manifest protocol version this SDK understands. */
export declare const manifestProtocolVersion = "1";
