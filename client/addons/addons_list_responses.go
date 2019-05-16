// Code generated by go-swagger; DO NOT EDIT.

package addons

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	models "github.com/slapec93/bitrise-api-client/models"
)

// AddonsListReader is a Reader for the AddonsList structure.
type AddonsListReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *AddonsListReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {

	case 200:
		result := NewAddonsListOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil

	case 400:
		result := NewAddonsListBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 401:
		result := NewAddonsListUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 404:
		result := NewAddonsListNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	case 500:
		result := NewAddonsListInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewAddonsListOK creates a AddonsListOK with default headers values
func NewAddonsListOK() *AddonsListOK {
	return &AddonsListOK{}
}

/*AddonsListOK handles this case with default header values.

OK
*/
type AddonsListOK struct {
	Payload *models.V0AddonsListResponseModel
}

func (o *AddonsListOK) Error() string {
	return fmt.Sprintf("[GET /addons][%d] addonsListOK  %+v", 200, o.Payload)
}

func (o *AddonsListOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.V0AddonsListResponseModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAddonsListBadRequest creates a AddonsListBadRequest with default headers values
func NewAddonsListBadRequest() *AddonsListBadRequest {
	return &AddonsListBadRequest{}
}

/*AddonsListBadRequest handles this case with default header values.

Bad Request
*/
type AddonsListBadRequest struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AddonsListBadRequest) Error() string {
	return fmt.Sprintf("[GET /addons][%d] addonsListBadRequest  %+v", 400, o.Payload)
}

func (o *AddonsListBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAddonsListUnauthorized creates a AddonsListUnauthorized with default headers values
func NewAddonsListUnauthorized() *AddonsListUnauthorized {
	return &AddonsListUnauthorized{}
}

/*AddonsListUnauthorized handles this case with default header values.

Unauthorized
*/
type AddonsListUnauthorized struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AddonsListUnauthorized) Error() string {
	return fmt.Sprintf("[GET /addons][%d] addonsListUnauthorized  %+v", 401, o.Payload)
}

func (o *AddonsListUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAddonsListNotFound creates a AddonsListNotFound with default headers values
func NewAddonsListNotFound() *AddonsListNotFound {
	return &AddonsListNotFound{}
}

/*AddonsListNotFound handles this case with default header values.

Not Found
*/
type AddonsListNotFound struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AddonsListNotFound) Error() string {
	return fmt.Sprintf("[GET /addons][%d] addonsListNotFound  %+v", 404, o.Payload)
}

func (o *AddonsListNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewAddonsListInternalServerError creates a AddonsListInternalServerError with default headers values
func NewAddonsListInternalServerError() *AddonsListInternalServerError {
	return &AddonsListInternalServerError{}
}

/*AddonsListInternalServerError handles this case with default header values.

Internal Server Error
*/
type AddonsListInternalServerError struct {
	Payload *models.ServiceStandardErrorRespModel
}

func (o *AddonsListInternalServerError) Error() string {
	return fmt.Sprintf("[GET /addons][%d] addonsListInternalServerError  %+v", 500, o.Payload)
}

func (o *AddonsListInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.ServiceStandardErrorRespModel)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}