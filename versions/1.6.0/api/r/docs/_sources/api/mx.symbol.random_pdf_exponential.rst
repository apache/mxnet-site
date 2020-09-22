

``mx.symbol.random_pdf_exponential``
========================================================================

Description
----------------------

Computes the value of the PDF of *sample* of
exponential distributions with parameters *lam* (rate).

The shape of *lam* must match the leftmost subshape of *sample*.  That is, *sample*
can have the same shape as *lam*, in which case the output contains one density per
distribution, or *sample* can be a tensor of tensors with that shape, in which case
the output is a tensor of densities such that the densities at index *i* in the output
are given by the samples at index *i* in *sample* parameterized by the value of *lam*
at index *i*.


**Example**::

	 
	 random_pdf_exponential(sample=[[1, 2, 3]], lam=[1]) =
	 [[0.36787945, 0.13533528, 0.04978707]]
	 
	 sample = [[1,2,3],
	 [1,2,3],
	 [1,2,3]]
	 
	 random_pdf_exponential(sample=sample, lam=[1,0.5,0.25]) =
	 [[0.36787945, 0.13533528, 0.04978707],
	 [0.30326533, 0.18393973, 0.11156508],
	 [0.1947002,  0.15163267, 0.11809164]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.random_pdf_exponential(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``sample``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Samples from the distributions.                            |
+----------------------------------------+------------------------------------------------------------+
| ``lam``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Lambda (rate) parameters of the distributions.             |
+----------------------------------------+------------------------------------------------------------+
| ``is.log``                             | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If set, compute the density of the log-probability instead |
|                                        | of the                                                     |
|                                        | probability.                                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/random/pdf_op.cc#L305

