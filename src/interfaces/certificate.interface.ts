export interface Certificate {
    coverImagePath: string,
    title: string,
    issuer: string,
    issueDate: string,
    description?: string
}
export interface CertificateSection {
    entities: Certificate[];
}