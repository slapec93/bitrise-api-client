// Code generated by go-swagger; DO NOT EDIT.

package build_certificate

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"
	"time"

	"golang.org/x/net/context"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/slapec93/bitrise-api-client/models"
)

// NewBuildCertificateCreateParams creates a new BuildCertificateCreateParams object
// with the default values initialized.
func NewBuildCertificateCreateParams() *BuildCertificateCreateParams {
	var ()
	return &BuildCertificateCreateParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewBuildCertificateCreateParamsWithTimeout creates a new BuildCertificateCreateParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewBuildCertificateCreateParamsWithTimeout(timeout time.Duration) *BuildCertificateCreateParams {
	var ()
	return &BuildCertificateCreateParams{

		timeout: timeout,
	}
}

// NewBuildCertificateCreateParamsWithContext creates a new BuildCertificateCreateParams object
// with the default values initialized, and the ability to set a context for a request
func NewBuildCertificateCreateParamsWithContext(ctx context.Context) *BuildCertificateCreateParams {
	var ()
	return &BuildCertificateCreateParams{

		Context: ctx,
	}
}

// NewBuildCertificateCreateParamsWithHTTPClient creates a new BuildCertificateCreateParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewBuildCertificateCreateParamsWithHTTPClient(client *http.Client) *BuildCertificateCreateParams {
	var ()
	return &BuildCertificateCreateParams{
		HTTPClient: client,
	}
}

/*BuildCertificateCreateParams contains all the parameters to send to the API endpoint
for the build certificate create operation typically these are written to a http.Request
*/
type BuildCertificateCreateParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*BuildCertificate
	  Build certificate parameters

	*/
	BuildCertificate *models.V0BuildCertificateUploadParams

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the build certificate create params
func (o *BuildCertificateCreateParams) WithTimeout(timeout time.Duration) *BuildCertificateCreateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the build certificate create params
func (o *BuildCertificateCreateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the build certificate create params
func (o *BuildCertificateCreateParams) WithContext(ctx context.Context) *BuildCertificateCreateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the build certificate create params
func (o *BuildCertificateCreateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the build certificate create params
func (o *BuildCertificateCreateParams) WithHTTPClient(client *http.Client) *BuildCertificateCreateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the build certificate create params
func (o *BuildCertificateCreateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the build certificate create params
func (o *BuildCertificateCreateParams) WithAppSlug(appSlug string) *BuildCertificateCreateParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the build certificate create params
func (o *BuildCertificateCreateParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithBuildCertificate adds the buildCertificate to the build certificate create params
func (o *BuildCertificateCreateParams) WithBuildCertificate(buildCertificate *models.V0BuildCertificateUploadParams) *BuildCertificateCreateParams {
	o.SetBuildCertificate(buildCertificate)
	return o
}

// SetBuildCertificate adds the buildCertificate to the build certificate create params
func (o *BuildCertificateCreateParams) SetBuildCertificate(buildCertificate *models.V0BuildCertificateUploadParams) {
	o.BuildCertificate = buildCertificate
}

// WriteToRequest writes these params to a swagger request
func (o *BuildCertificateCreateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if o.BuildCertificate != nil {
		if err := r.SetBodyParam(o.BuildCertificate); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
