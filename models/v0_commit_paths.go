// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0CommitPaths v0 commit paths
// swagger:model v0.CommitPaths
type V0CommitPaths struct {

	// added
	Added []string `json:"added"`

	// modified
	Modified []string `json:"modified"`

	// removed
	Removed []string `json:"removed"`
}

// Validate validates this v0 commit paths
func (m *V0CommitPaths) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0CommitPaths) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0CommitPaths) UnmarshalBinary(b []byte) error {
	var res V0CommitPaths
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
