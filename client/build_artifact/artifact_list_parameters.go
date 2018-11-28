// Code generated by go-swagger; DO NOT EDIT.

package build_artifact

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/swag"

	strfmt "github.com/go-openapi/strfmt"
)

// NewArtifactListParams creates a new ArtifactListParams object
// with the default values initialized.
func NewArtifactListParams() *ArtifactListParams {
	var ()
	return &ArtifactListParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewArtifactListParamsWithTimeout creates a new ArtifactListParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewArtifactListParamsWithTimeout(timeout time.Duration) *ArtifactListParams {
	var ()
	return &ArtifactListParams{

		timeout: timeout,
	}
}

// NewArtifactListParamsWithContext creates a new ArtifactListParams object
// with the default values initialized, and the ability to set a context for a request
func NewArtifactListParamsWithContext(ctx context.Context) *ArtifactListParams {
	var ()
	return &ArtifactListParams{

		Context: ctx,
	}
}

// NewArtifactListParamsWithHTTPClient creates a new ArtifactListParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewArtifactListParamsWithHTTPClient(client *http.Client) *ArtifactListParams {
	var ()
	return &ArtifactListParams{
		HTTPClient: client,
	}
}

/*ArtifactListParams contains all the parameters to send to the API endpoint
for the artifact list operation typically these are written to a http.Request
*/
type ArtifactListParams struct {

	/*AppSlug
	  App slug

	*/
	AppSlug string
	/*BuildSlug
	  Build slug

	*/
	BuildSlug string
	/*Limit
	  Max number of elements per page (default: 50)

	*/
	Limit *int64
	/*Next
	  Slug of the first build artifact in the response

	*/
	Next *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the artifact list params
func (o *ArtifactListParams) WithTimeout(timeout time.Duration) *ArtifactListParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the artifact list params
func (o *ArtifactListParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the artifact list params
func (o *ArtifactListParams) WithContext(ctx context.Context) *ArtifactListParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the artifact list params
func (o *ArtifactListParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the artifact list params
func (o *ArtifactListParams) WithHTTPClient(client *http.Client) *ArtifactListParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the artifact list params
func (o *ArtifactListParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithAppSlug adds the appSlug to the artifact list params
func (o *ArtifactListParams) WithAppSlug(appSlug string) *ArtifactListParams {
	o.SetAppSlug(appSlug)
	return o
}

// SetAppSlug adds the appSlug to the artifact list params
func (o *ArtifactListParams) SetAppSlug(appSlug string) {
	o.AppSlug = appSlug
}

// WithBuildSlug adds the buildSlug to the artifact list params
func (o *ArtifactListParams) WithBuildSlug(buildSlug string) *ArtifactListParams {
	o.SetBuildSlug(buildSlug)
	return o
}

// SetBuildSlug adds the buildSlug to the artifact list params
func (o *ArtifactListParams) SetBuildSlug(buildSlug string) {
	o.BuildSlug = buildSlug
}

// WithLimit adds the limit to the artifact list params
func (o *ArtifactListParams) WithLimit(limit *int64) *ArtifactListParams {
	o.SetLimit(limit)
	return o
}

// SetLimit adds the limit to the artifact list params
func (o *ArtifactListParams) SetLimit(limit *int64) {
	o.Limit = limit
}

// WithNext adds the next to the artifact list params
func (o *ArtifactListParams) WithNext(next *string) *ArtifactListParams {
	o.SetNext(next)
	return o
}

// SetNext adds the next to the artifact list params
func (o *ArtifactListParams) SetNext(next *string) {
	o.Next = next
}

// WriteToRequest writes these params to a swagger request
func (o *ArtifactListParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param app-slug
	if err := r.SetPathParam("app-slug", o.AppSlug); err != nil {
		return err
	}

	// path param build-slug
	if err := r.SetPathParam("build-slug", o.BuildSlug); err != nil {
		return err
	}

	if o.Limit != nil {

		// query param limit
		var qrLimit int64
		if o.Limit != nil {
			qrLimit = *o.Limit
		}
		qLimit := swag.FormatInt64(qrLimit)
		if qLimit != "" {
			if err := r.SetQueryParam("limit", qLimit); err != nil {
				return err
			}
		}

	}

	if o.Next != nil {

		// query param next
		var qrNext string
		if o.Next != nil {
			qrNext = *o.Next
		}
		qNext := qrNext
		if qNext != "" {
			if err := r.SetQueryParam("next", qNext); err != nil {
				return err
			}
		}

	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
