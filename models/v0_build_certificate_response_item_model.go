// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0BuildCertificateResponseItemModel v0 build certificate response item model
// swagger:model v0.BuildCertificateResponseItemModel
type V0BuildCertificateResponseItemModel struct {

	// certificate password
	CertificatePassword string `json:"certificate_password,omitempty"`

	// download url
	DownloadURL string `json:"download_url,omitempty"`

	// is expose
	IsExpose bool `json:"is_expose,omitempty"`

	// is protected
	IsProtected bool `json:"is_protected,omitempty"`

	// processed
	Processed bool `json:"processed,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// upload file name
	UploadFileName string `json:"upload_file_name,omitempty"`

	// upload file size
	UploadFileSize int64 `json:"upload_file_size,omitempty"`

	// upload url
	UploadURL string `json:"upload_url,omitempty"`
}

// Validate validates this v0 build certificate response item model
func (m *V0BuildCertificateResponseItemModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0BuildCertificateResponseItemModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0BuildCertificateResponseItemModel) UnmarshalBinary(b []byte) error {
	var res V0BuildCertificateResponseItemModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
