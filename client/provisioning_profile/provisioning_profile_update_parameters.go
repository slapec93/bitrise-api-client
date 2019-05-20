// Code generated by go-swagger; DO NOT EDIT.

package provisioning_profile

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/slapec93/bitrise-api-client/models"
)

// NewProvisioningProfileUpdateParams creates a new ProvisioningProfileUpdateParams object
// with the default values initialized.
func NewProvisioningProfileUpdateParams() *ProvisioningProfileUpdateParams {
	var ()
	return &ProvisioningProfileUpdateParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewProvisioningProfileUpdateParamsWithTimeout creates a new ProvisioningProfileUpdateParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewProvisioningProfileUpdateParamsWithTimeout(timeout time.Duration) *ProvisioningProfileUpdateParams {
	var ()
	return &ProvisioningProfileUpdateParams{

		timeout: timeout,
	}
}

// NewProvisioningProfileUpdateParamsWithContext creates a new ProvisioningProfileUpdateParams object
// with the default values initialized, and the ability to set a context for a request
func NewProvisioningProfileUpdateParamsWithContext(ctx context.Context) *ProvisioningProfileUpdateParams {
	var ()
	return &ProvisioningProfileUpdateParams{

		Context: ctx,
	}
}

// NewProvisioningProfileUpdateParamsWithHTTPClient creates a new ProvisioningProfileUpdateParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewProvisioningProfileUpdateParamsWithHTTPClient(client *http.Client) *ProvisioningProfileUpdateParams {
	var ()
	return &ProvisioningProfileUpdateParams{
		HTTPClient: client,
	}
}

/*ProvisioningProfileUpdateParams contains all the parameters to send to the API endpoint
for the provisioning profile update operation typically these are written to a http.Request
*/
type ProvisioningProfileUpdateParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*ProvisioningProfile
	  Provisioning profile parameters

	*/
	ProvisioningProfile *models.V0ProvProfileDocumentUpdateParams
	/*ProvisioningProfileSlug
	  Provisioning profile slug

	*/
	ProvisioningProfileSlug string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithTimeout(timeout time.Duration) *ProvisioningProfileUpdateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithContext(ctx context.Context) *ProvisioningProfileUpdateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithHTTPClient(client *http.Client) *ProvisioningProfileUpdateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithAppSlug(appSlug string) *ProvisioningProfileUpdateParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithProvisioningProfile adds the provisioningProfile to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithProvisioningProfile(provisioningProfile *models.V0ProvProfileDocumentUpdateParams) *ProvisioningProfileUpdateParams {
	o.SetProvisioningProfile(provisioningProfile)
	return o
}

// SetProvisioningProfile adds the provisioningProfile to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetProvisioningProfile(provisioningProfile *models.V0ProvProfileDocumentUpdateParams) {
	o.ProvisioningProfile = provisioningProfile
}

// WithProvisioningProfileSlug adds the provisioningProfileSlug to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) WithProvisioningProfileSlug(provisioningProfileSlug string) *ProvisioningProfileUpdateParams {
	o.SetProvisioningProfileSlug(provisioningProfileSlug)
	return o
}

// SetProvisioningProfileSlug adds the provisioningProfileSlug to the provisioning profile update params
func (o *ProvisioningProfileUpdateParams) SetProvisioningProfileSlug(provisioningProfileSlug string) {
	o.ProvisioningProfileSlug = provisioningProfileSlug
}

// WriteToRequest writes these params to a swagger request
func (o *ProvisioningProfileUpdateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if o.ProvisioningProfile != nil {
		if err := r.SetBodyParam(o.ProvisioningProfile); err != nil {
			return err
		}
	}

	// path param provisioning-profile-slug
	if err := r.SetPathParam("provisioning-profile-slug", o.ProvisioningProfileSlug); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
