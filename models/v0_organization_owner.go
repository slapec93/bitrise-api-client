// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// V0OrganizationOwner v0 organization owner
// swagger:model v0.OrganizationOwner
type V0OrganizationOwner struct {

	// email
	Email string `json:"email,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// username
	Username string `json:"username,omitempty"`
}

// Validate validates this v0 organization owner
func (m *V0OrganizationOwner) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0OrganizationOwner) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0OrganizationOwner) UnmarshalBinary(b []byte) error {
	var res V0OrganizationOwner
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}