// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// V0ArtifactListElementResponseModel v0 artifact list element response model
// swagger:model v0.ArtifactListElementResponseModel
type V0ArtifactListElementResponseModel struct {

	// artifact type
	ArtifactType string `json:"artifact_type,omitempty"`

	// file size bytes
	FileSizeBytes string `json:"file_size_bytes,omitempty"`

	// is public page enabled
	IsPublicPageEnabled bool `json:"is_public_page_enabled,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// title
	Title string `json:"title,omitempty"`
}

// Validate validates this v0 artifact list element response model
func (m *V0ArtifactListElementResponseModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0ArtifactListElementResponseModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0ArtifactListElementResponseModel) UnmarshalBinary(b []byte) error {
	var res V0ArtifactListElementResponseModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}