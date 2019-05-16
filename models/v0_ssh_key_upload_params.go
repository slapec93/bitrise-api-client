// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// V0SSHKeyUploadParams v0 SSH key upload params
// swagger:model v0.SSHKeyUploadParams
type V0SSHKeyUploadParams struct {

	// auth ssh private key
	AuthSSHPrivateKey string `json:"auth_ssh_private_key,omitempty"`

	// auth ssh public key
	AuthSSHPublicKey string `json:"auth_ssh_public_key,omitempty"`

	// is register key into provider service
	IsRegisterKeyIntoProviderService bool `json:"is_register_key_into_provider_service,omitempty"`
}

// Validate validates this v0 SSH key upload params
func (m *V0SSHKeyUploadParams) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0SSHKeyUploadParams) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0SSHKeyUploadParams) UnmarshalBinary(b []byte) error {
	var res V0SSHKeyUploadParams
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
