

``mx.nd.random.pdf.normal``
======================================================

Description
----------------------

Computes the value of the PDF of *sample* of
normal distributions with parameters *mu* (mean) and *sigma* (standard deviation).

*mu* and *sigma* must have the same shape, which must match the leftmost subshape
of *sample*.  That is, *sample* can have the same shape as *mu* and *sigma*, in which
case the output contains one density per distribution, or *sample* can be a tensor
of tensors with that shape, in which case the output is a tensor of densities such that
the densities at index *i* in the output are given by the samples at index *i* in *sample*
parameterized by the values of *mu* and *sigma* at index *i*.


**Example**::

	 
	 sample = [[-2, -1, 0, 1, 2]]
	 random_pdf_normal(sample=sample, mu=[0], sigma=[1]) =
	 [[0.05399097, 0.24197073, 0.3989423, 0.24197073, 0.05399097]]
	 
	 random_pdf_normal(sample=sample*2, mu=[0,0], sigma=[1,2]) =
	 [[0.05399097, 0.24197073, 0.3989423,  0.24197073, 0.05399097],
	 [0.12098537, 0.17603266, 0.19947115, 0.17603266, 0.12098537]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``sample``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Samples from the distributions.                            |
+----------------------------------------+------------------------------------------------------------+
| ``mu``                                 | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Means of the distributions.                                |
+----------------------------------------+------------------------------------------------------------+
| ``is.log``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If set, compute the density of the log-probability instead |
|                                        | of the                                                     |
|                                        | probability.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``sigma``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Standard deviations of the distributions.                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/pdf_op.cc#L300

