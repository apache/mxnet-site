

``mx.nd.random.pdf.gamma``
====================================================

Description
----------------------

Computes the value of the PDF of *sample* of
gamma distributions with parameters *alpha* (shape) and *beta* (rate).

*alpha* and *beta* must have the same shape, which must match the leftmost subshape
of *sample*.  That is, *sample* can have the same shape as *alpha* and *beta*, in which
case the output contains one density per distribution, or *sample* can be a tensor
of tensors with that shape, in which case the output is a tensor of densities such that
the densities at index *i* in the output are given by the samples at index *i* in *sample*
parameterized by the values of *alpha* and *beta* at index *i*.


**Example**::

	 
	 random_pdf_gamma(sample=[[1,2,3,4,5]], alpha=[5], beta=[1]) =
	 [[0.01532831, 0.09022352, 0.16803136, 0.19536681, 0.17546739]]
	 
	 sample = [[1, 2, 3, 4, 5],
	 [2, 3, 4, 5, 6],
	 [3, 4, 5, 6, 7]]
	 
	 random_pdf_gamma(sample=sample, alpha=[5,6,7], beta=[1,1,1]) =
	 [[0.01532831, 0.09022352, 0.16803136, 0.19536681, 0.17546739],
	 [0.03608941, 0.10081882, 0.15629345, 0.17546739, 0.16062315],
	 [0.05040941, 0.10419563, 0.14622283, 0.16062315, 0.14900276]]
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``sample``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Samples from the distributions.                            |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Alpha (shape) parameters of the distributions.             |
+----------------------------------------+------------------------------------------------------------+
| ``is.log``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If set, compute the density of the log-probability instead |
|                                        | of the                                                     |
|                                        | probability.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Beta (scale) parameters of the distributions.              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/pdf_op.cc#L303

