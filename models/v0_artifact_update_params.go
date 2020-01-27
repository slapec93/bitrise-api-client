// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0ArtifactUpdateParams v0 artifact update params
// swagger:model v0.ArtifactUpdateParams
type V0ArtifactUpdateParams struct {

	// is public page enabled
	IsPublicPageEnabled bool `json:"is_public_page_enabled,omitempty"`
}

// Validate validates this v0 artifact update params
func (m *V0ArtifactUpdateParams) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0ArtifactUpdateParams) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0ArtifactUpdateParams) UnmarshalBinary(b []byte) error {
	var res V0ArtifactUpdateParams
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
