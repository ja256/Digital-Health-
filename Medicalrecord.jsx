import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './MedicalRecordForm.css';

const MedicalRecordForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    date: '',
    details: '',
    notes: '',
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      const formattedDate = initialData.date
        ? typeof initialData.date === 'string'
          ? initialData.date.split('T')[0]
          : initialData.date.toISOString().split('T')[0]
        : '';
      setFormData({ ...initialData, date: formattedDate });
    } else {
      setFormData({ date: '', details: '', notes: '' });
    }
    setValidationErrors({});
  }, [initialData]);

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = 'Date is required';
    if (!formData.details.trim()) errors.details = 'Details are required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setValidationErrors({});
    } catch (error) {
      setValidationErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="medical-record-form p-4 border rounded">
      {validationErrors.submit && (
        <Alert variant="danger" dismissible onClose={() => setValidationErrors({})}>
          {validationErrors.submit}
        </Alert>
      )}

      <Row className="mb-3">
        <Form.Group as={Col} md={6} controlId="formDate">
          <Form.Label>
            Date <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="date"
            value={formData.date}
            onChange={handleChange('date')}
            isInvalid={!!validationErrors.date}
            required
          />
          <Form.Control.Feedback type="invalid">
            {validationErrors.date}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formDetails">
        <Form.Label>
          Details <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={formData.details}
          onChange={handleChange('details')}
          isInvalid={!!validationErrors.details}
          required
        />
        <Form.Control.Feedback type="invalid">
          {validationErrors.details}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNotes">
        <Form.Label>Additional Notes</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={formData.notes}
          onChange={handleChange('notes')}
        />
      </Form.Group>

      <div className="d-flex justify-content-end gap-2">
        <Button
          variant="secondary"
          onClick={onCancel}
          className="px-4"
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="px-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update Record' : 'Create Record'}
        </Button>
      </div>
    </Form>
  );
};

MedicalRecordForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    details: PropTypes.string,
    notes: PropTypes.string,
  }),
  onSubmit: PropTypes
};
export default MedicalRecordForm;
