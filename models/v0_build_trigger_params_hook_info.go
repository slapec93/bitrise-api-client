// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// V0BuildTriggerParamsHookInfo v0 build trigger params hook info
// swagger:model v0.BuildTriggerParamsHookInfo
type V0BuildTriggerParamsHookInfo struct {

	// type
	Type string `json:"type,omitempty"`
}

// Validate validates this v0 build trigger params hook info
func (m *V0BuildTriggerParamsHookInfo) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0BuildTriggerParamsHookInfo) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0BuildTriggerParamsHookInfo) UnmarshalBinary(b []byte) error {
	var res V0BuildTriggerParamsHookInfo
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
