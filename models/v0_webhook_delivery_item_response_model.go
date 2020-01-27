// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V0WebhookDeliveryItemResponseModel v0 webhook delivery item response model
// swagger:model v0.WebhookDeliveryItemResponseModel
type V0WebhookDeliveryItemResponseModel struct {

	// created at
	CreatedAt string `json:"created_at,omitempty"`

	// request headers
	RequestHeaders string `json:"request_headers,omitempty"`

	// request payload
	RequestPayload string `json:"request_payload,omitempty"`

	// request url
	RequestURL string `json:"request_url,omitempty"`

	// response body
	ResponseBody string `json:"response_body,omitempty"`

	// response headers
	ResponseHeaders string `json:"response_headers,omitempty"`

	// response http status
	ResponseHTTPStatus string `json:"response_http_status,omitempty"`

	// response seconds
	ResponseSeconds string `json:"response_seconds,omitempty"`

	// slug
	Slug string `json:"slug,omitempty"`

	// updated at
	UpdatedAt string `json:"updated_at,omitempty"`
}

// Validate validates this v0 webhook delivery item response model
func (m *V0WebhookDeliveryItemResponseModel) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *V0WebhookDeliveryItemResponseModel) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V0WebhookDeliveryItemResponseModel) UnmarshalBinary(b []byte) error {
	var res V0WebhookDeliveryItemResponseModel
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
