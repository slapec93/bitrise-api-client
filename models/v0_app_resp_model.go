// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0AppRespModel v0 app resp model
// swagger:model v0.AppRespModel
type V0AppRespModel struct {

	// slug
	Slug string `json:"slug,omitempty"`

	// status
	Status string `json:"status,omitempty"`
}

// Validate validates this v0 app resp model
func (m *V0AppRespModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0AppRespModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0AppRespModel) UnmarshalBinary(b []byte) error {
	var res V0AppRespModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
