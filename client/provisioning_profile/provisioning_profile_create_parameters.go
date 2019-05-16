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

// NewProvisioningProfileCreateParams creates a new ProvisioningProfileCreateParams object
// with the default values initialized.
func NewProvisioningProfileCreateParams() *ProvisioningProfileCreateParams {
	var ()
	return &ProvisioningProfileCreateParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewProvisioningProfileCreateParamsWithTimeout creates a new ProvisioningProfileCreateParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewProvisioningProfileCreateParamsWithTimeout(timeout time.Duration) *ProvisioningProfileCreateParams {
	var ()
	return &ProvisioningProfileCreateParams{

		timeout: timeout,
	}
}

// NewProvisioningProfileCreateParamsWithContext creates a new ProvisioningProfileCreateParams object
// with the default values initialized, and the ability to set a context for a request
func NewProvisioningProfileCreateParamsWithContext(ctx context.Context) *ProvisioningProfileCreateParams {
	var ()
	return &ProvisioningProfileCreateParams{

		Context: ctx,
	}
}

// NewProvisioningProfileCreateParamsWithHTTPClient creates a new ProvisioningProfileCreateParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewProvisioningProfileCreateParamsWithHTTPClient(client *http.Client) *ProvisioningProfileCreateParams {
	var ()
	return &ProvisioningProfileCreateParams{
		HTTPClient: client,
	}
}

/*ProvisioningProfileCreateParams contains all the parameters to send to the API endpoint
for the provisioning profile create operation typically these are written to a http.Request
*/
type ProvisioningProfileCreateParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*ProvisioningProfile
	  Provisioning profile parameters such as file name and file size

	*/
	ProvisioningProfile *models.V0ProvisionProfileUploadParams

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) WithTimeout(timeout time.Duration) *ProvisioningProfileCreateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) WithContext(ctx context.Context) *ProvisioningProfileCreateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) WithHTTPClient(client *http.Client) *ProvisioningProfileCreateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) WithAppSlug(appSlug string) *ProvisioningProfileCreateParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithProvisioningProfile adds the provisioningProfile to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) WithProvisioningProfile(provisioningProfile *models.V0ProvisionProfileUploadParams) *ProvisioningProfileCreateParams {
	o.SetProvisioningProfile(provisioningProfile)
	return o
}

// SetProvisioningProfile adds the provisioningProfile to the provisioning profile create params
func (o *ProvisioningProfileCreateParams) SetProvisioningProfile(provisioningProfile *models.V0ProvisionProfileUploadParams) {
	o.ProvisioningProfile = provisioningProfile
}

// WriteToRequest writes these params to a swagger request
func (o *ProvisioningProfileCreateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

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

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
