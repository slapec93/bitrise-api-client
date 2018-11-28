// Code generated by go-swagger; DO NOT EDIT.

package android_keystore_file

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

// NewAndroidKeystoreFileCreateParams creates a new AndroidKeystoreFileCreateParams object
// with the default values initialized.
func NewAndroidKeystoreFileCreateParams() *AndroidKeystoreFileCreateParams {
	var ()
	return &AndroidKeystoreFileCreateParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewAndroidKeystoreFileCreateParamsWithTimeout creates a new AndroidKeystoreFileCreateParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewAndroidKeystoreFileCreateParamsWithTimeout(timeout time.Duration) *AndroidKeystoreFileCreateParams {
	var ()
	return &AndroidKeystoreFileCreateParams{

		timeout: timeout,
	}
}

// NewAndroidKeystoreFileCreateParamsWithContext creates a new AndroidKeystoreFileCreateParams object
// with the default values initialized, and the ability to set a context for a request
func NewAndroidKeystoreFileCreateParamsWithContext(ctx context.Context) *AndroidKeystoreFileCreateParams {
	var ()
	return &AndroidKeystoreFileCreateParams{

		Context: ctx,
	}
}

// NewAndroidKeystoreFileCreateParamsWithHTTPClient creates a new AndroidKeystoreFileCreateParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewAndroidKeystoreFileCreateParamsWithHTTPClient(client *http.Client) *AndroidKeystoreFileCreateParams {
	var ()
	return &AndroidKeystoreFileCreateParams{
		HTTPClient: client,
	}
}

/*AndroidKeystoreFileCreateParams contains all the parameters to send to the API endpoint
for the android keystore file create operation typically these are written to a http.Request
*/
type AndroidKeystoreFileCreateParams struct {

	/*AndroidKeystoreFile
	  Android keystore file parameters

	*/
	AndroidKeystoreFile *models.V0ProjectFileStorageUploadParams
	/*AppSlug
	  App slug

	*/
	AppSlug string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) WithTimeout(timeout time.Duration) *AndroidKeystoreFileCreateParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) WithContext(ctx context.Context) *AndroidKeystoreFileCreateParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) WithHTTPClient(client *http.Client) *AndroidKeystoreFileCreateParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAndroidKeystoreFile adds the androidKeystoreFile to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) WithAndroidKeystoreFile(androidKeystoreFile *models.V0ProjectFileStorageUploadParams) *AndroidKeystoreFileCreateParams {
	o.SetAndroidKeystoreFile(androidKeystoreFile)
	return o
}

// SetAndroidKeystoreFile adds the androidKeystoreFile to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) SetAndroidKeystoreFile(androidKeystoreFile *models.V0ProjectFileStorageUploadParams) {
	o.AndroidKeystoreFile = androidKeystoreFile
}

// WithAppSlug adds the appSlug to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) WithAppSlug(appSlug string) *AndroidKeystoreFileCreateParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the android keystore file create params
func (o *AndroidKeystoreFileCreateParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WriteToRequest writes these params to a swagger request
func (o *AndroidKeystoreFileCreateParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.AndroidKeystoreFile != nil {
		if err := r.SetBodyParam(o.AndroidKeystoreFile); err != nil {
			return err
		}
	}

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
