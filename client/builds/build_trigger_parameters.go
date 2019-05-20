// Code generated by go-swagger; DO NOT EDIT.

package builds

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

// NewBuildTriggerParams creates a new BuildTriggerParams object
// with the default values initialized.
func NewBuildTriggerParams() *BuildTriggerParams {
	var ()
	return &BuildTriggerParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewBuildTriggerParamsWithTimeout creates a new BuildTriggerParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewBuildTriggerParamsWithTimeout(timeout time.Duration) *BuildTriggerParams {
	var ()
	return &BuildTriggerParams{

		timeout: timeout,
	}
}

// NewBuildTriggerParamsWithContext creates a new BuildTriggerParams object
// with the default values initialized, and the ability to set a context for a request
func NewBuildTriggerParamsWithContext(ctx context.Context) *BuildTriggerParams {
	var ()
	return &BuildTriggerParams{

		Context: ctx,
	}
}

// NewBuildTriggerParamsWithHTTPClient creates a new BuildTriggerParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewBuildTriggerParamsWithHTTPClient(client *http.Client) *BuildTriggerParams {
	var ()
	return &BuildTriggerParams{
		HTTPClient: client,
	}
}

/*BuildTriggerParams contains all the parameters to send to the API endpoint
for the build trigger operation typically these are written to a http.Request
*/
type BuildTriggerParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*SSHKey
	  Build trigger parameters

	*/
	SSHKey *models.V0BuildTriggerParams

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the build trigger params
func (o *BuildTriggerParams) WithTimeout(timeout time.Duration) *BuildTriggerParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the build trigger params
func (o *BuildTriggerParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the build trigger params
func (o *BuildTriggerParams) WithContext(ctx context.Context) *BuildTriggerParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the build trigger params
func (o *BuildTriggerParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the build trigger params
func (o *BuildTriggerParams) WithHTTPClient(client *http.Client) *BuildTriggerParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the build trigger params
func (o *BuildTriggerParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the build trigger params
func (o *BuildTriggerParams) WithAppSlug(appSlug string) *BuildTriggerParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the build trigger params
func (o *BuildTriggerParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithSSHKey adds the sSHKey to the build trigger params
func (o *BuildTriggerParams) WithSSHKey(sSHKey *models.V0BuildTriggerParams) *BuildTriggerParams {
	o.SetSSHKey(sSHKey)
	return o
}

// SetSSHKey adds the sshKey to the build trigger params
func (o *BuildTriggerParams) SetSSHKey(sSHKey *models.V0BuildTriggerParams) {
	o.SSHKey = sSHKey
}

// WriteToRequest writes these params to a swagger request
func (o *BuildTriggerParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if o.SSHKey != nil {
		if err := r.SetBodyParam(o.SSHKey); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
