// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// V0ProvisionProfileUploadParams v0 provision profile upload params
// swagger:model v0.ProvisionProfileUploadParams
type V0ProvisionProfileUploadParams struct {

	// upload file name
	UploadFileName string `json:"upload_file_name,omitempty"`

	// upload file size
	UploadFileSize int64 `json:"upload_file_size,omitempty"`
}

// Validate validates this v0 provision profile upload params
func (m *V0ProvisionProfileUploadParams) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0ProvisionProfileUploadParams) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0ProvisionProfileUploadParams) UnmarshalBinary(b []byte) error {
	var res V0ProvisionProfileUploadParams
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
